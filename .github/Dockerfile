FROM golang:latest as build

WORKDIR /app

COPY . .

RUN CGO_ENABLED=0 go build -o app main.go

FROM alpine:latest

WORKDIR /app

COPY --from=build /app/app .

CMD ["./app"]