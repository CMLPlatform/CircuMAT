from .base import *

STATIC_ROOT = os.path.join(BASE_DIR,
                           os.environ.get('PUBLIC_DIR', ''), 'static')

DEBUG = False

ALLOWED_HOSTS = ['circumat-staging.local', '127.0.0.1',
                 'www.circumat.eu', 'circumat.eu', os.environ["HOST"]]

DATASET_DIR = os.environ.get('DATASETS_DIR',
                             'C:\\projects\\rama-scene_data\\rawData')

# name of numpy objects for timeseries
DATASET_VERSION = os.environ['DATASETS_VERSION']

SECRET_KEY = os.environ['SECRET_KEY']

# Celery settings
CELERY_BROKER_URL = os.environ['BROKER_URL']
