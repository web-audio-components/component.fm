PUBLIC=./public
CLIENT=./client
JADE=./node_modules/jade/bin/jade
STYLUS=./node_modules/stylus/bin/stylus
BROWSERIFY=./node_modules/browserify/bin/cmd.js
UGLIFY=./node_modules/uglify-js/bin/uglifyjs
CLEANCSS=./node_modules/clean-css/bin/cleancss

all: install jade stylus browserify concat min

jade:
	node $(JADE) $(CLIENT)/markup/index.jade --obj '{"env":"development"}' --pretty --out $(PUBLIC)
	mv $(PUBLIC)/index.html $(PUBLIC)/dev.html
	node $(JADE) $(CLIENT)/markup/index.jade --obj '{"env":"production"}' --out $(PUBLIC)

stylus:
	mkdir -p $(PUBLIC)/styles
	rm -f $(PUBLIC)/styles/app.css
	@for style in `ls $(CLIENT)/styles/*.styl`; do \
		node $(STYLUS) < $$style >> $(PUBLIC)/styles/app.css ; \
	done

components:
	cd $(CLIENT) && component build --prefix './'
	cp -r $(CLIENT)/build/web-audio-components-rack \
		$(PUBLIC)/styles

browserify:
	mkdir -p $(PUBLIC)/scripts
	node $(BROWSERIFY) -t brfs $(CLIENT)/index.js > $(PUBLIC)/scripts/app.js

concat:
	cat ./vendor/scripts/jquery-2.0.0.js > $(PUBLIC)/scripts/site.js
	cat ./vendor/scripts/underscore-1.4.4.js >> $(PUBLIC)/scripts/site.js
	cat ./vendor/scripts/backbone-1.0.0.js >> $(PUBLIC)/scripts/site.js
	cat $(CLIENT)/build/build.js >> $(PUBLIC)/scripts/site.js
	cat $(PUBLIC)/scripts/app.js >> $(PUBLIC)/scripts/site.js
	
	cat ./vendor/styles/bootstrap.css > $(PUBLIC)/styles/site.css
	cat ./vendor/styles/font-awesome.css >> $(PUBLIC)/styles/site.css
	cat $(CLIENT)/build/build.css >> $(PUBLIC)/styles/site.css
	cat $(PUBLIC)/styles/app.css >> $(PUBLIC)/styles/site.css

min:
	node $(UGLIFY) $(PUBLIC)/scripts/site.js -o $(PUBLIC)/scripts/site.min.js
	node $(CLEANCSS) $(PUBLIC)/styles/site.css -o $(PUBLIC)/styles/site.min.css

install: 
	@npm install
	cd $(CLIENT) && component install

.PHONY: jade stylus browserify components concat min
