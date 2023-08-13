# DOCKER

## List of problems

- when dockerfile updates in one line - when image is built it'll take resources from cache for the lines only until the updated one. Next lines will have to execute fetch or installing...
- tagging an image - to not have to use image id that are random numbers. It's better to specify tag of the image. It can be acomplished with **-t** flag and **user_docker_id/project_name:version** convention (i.e. docker build -t user123/helloWorld:latest)
