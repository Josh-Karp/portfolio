# Makefile for Docker commands

.PHONY: build run stop logs shell clean help

build:
	docker-compose build

run:
	docker-compose up -d

stop:
	docker-compose down

logs:
	docker-compose logs -f

shell:
	docker-compose exec web sh

clean:
	docker-compose down -v
	docker image rm joshua-karp-cv:latest

help:
	@echo "Docker commands:"
	@echo "  make build    - Build Docker image"
	@echo "  make run      - Start container in background"
	@echo "  make stop     - Stop container"
	@echo "  make logs     - View container logs"
	@echo "  make shell    - Open shell inside container"
	@echo "  make clean    - Remove container and image"
