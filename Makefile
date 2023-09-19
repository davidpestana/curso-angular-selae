cli-angular:  ## launch angular cli on ejemploUno
	docker compose run -it --rm angular bash
cli-another:  ## launch angular cli on another
	docker compose run -it --rm another bash
cli-another:
	docker compose run -it --rm another bash
start:   ## start dev enviroment
	docker compose up -d 
stop:
	docker compose down --remove-orphans
build:
	docker compose build
help:
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'
