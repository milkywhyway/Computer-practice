start:
	make build
	make install
	make quickstart

build:
	npm install

clean:
	npm cache clean -force

install:
	IF NOT EXIST "\project" (md \project);
	xcopy . \project /Y /C /R /S /Q

quickstart:
	node index