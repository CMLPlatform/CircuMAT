# pull the official base image
FROM python:3

RUN mkdir /app

# set work directory
WORKDIR /app

# set environment variables
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

# install dependencies
# RUN pip install --upgrade pip 
COPY ./requirements.txt /app
RUN pip install -r requirements.txt
# add project
ADD . /app


 