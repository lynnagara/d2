.PHONY: watch

watch:
	./node_modules/.bin/webpack --watch

build:
	@mkdir -p dist
	rm -rf dist/*
	./node_modules/.bin/webpack
