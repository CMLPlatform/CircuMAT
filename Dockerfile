# pull the official base image
FROM ubuntu


RUN mkdir /app

ENV DEBIAN_FRONTEND=noninteractive

RUN apt-get update && apt-get install -y \
    nodejs \
    python3-pip \
    npm \
    redis-server \
    erlang \
    rabbitmq-server \
    systemctl

# set work directory
WORKDIR /app

# set environment variables
ENV PYTHONDONTWRITEBYTECODE 1duco
ENV PYTHONUNBUFFERED 1

# install dependencies
COPY ./requirements.txt /app
RUN pip install --upgrade pip && \
    pip install -r /app/requirements.txt 


# add project
COPY . /app

