#!/bin/bash
./node_modules/.bin/jshint . --reporter checkstyle -c ./config/jshint-config.json > jshint-report.xml
./node_modules/.bin/jscpd