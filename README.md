# Language Learning Platform

![New Language Learning Platform Logo](/frontend/src/assets/images/new_lango_logo.png)

## Language Dashboard

![Dashboard](/img/language-dashboard.png)


## Local Setup Guide

### Backend

Make Sure you have `python3.10`

Also setup your Postgres by creating user and creating a database `language_learning_platform`

Change this in `.env`

```
cd backend
pip install -r requirements.txt
python app/backend_pre_start.py
alembic upgrade head
python app/initial_data.py
python app/main.py
```
This will open a backend at `http://0.0.0.0:8888`

### Frontend

```
cd frontend
npm i
npm run dev
```
