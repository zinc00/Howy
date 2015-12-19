#!/bin/bash
./node_modules/.bin/jshint . --reporter checkstyle -c ./config/jshint-config.json > player-jshint.xml
./node_modules/.bin/jscpd