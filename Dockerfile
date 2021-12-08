# pull the official base image
FROM python:3.8-alpine

RUN mkdir /usr/src/app

# Set environmental variables
RUN export DJANGO_SETTINGS_MODULE=config/circumatMasterProject.config.dev
RUN export DATASETS_VERSION=v4
RUN export DATASETS_DIR=data/
RUN export OPENBLAS_NUM_THREADS=3

# set work directory
WORKDIR /usr/src/app/backend

# set environment variables
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

# install dependencies
RUN pip install --upgrade pip 
COPY ./requirements.txt /usr/src/app
RUN pip install -r requirements.txt

# add project
ADD . /usr/src/app/backend




