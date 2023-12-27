FROM python:2-alpine3.8

WORKDIR /app

COPY . /app

RUN pip install -r requirements.txt

EXPOSE 3000

CMD [ "python", "app.py"]