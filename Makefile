watch: lint
	./node_modules/.bin/webpack --watch

build: lint
	@mkdir -p dist
	rm -rf dist/*
	./node_modules/.bin/webpack

lint:
	./node_modules/.bin/eslint js
