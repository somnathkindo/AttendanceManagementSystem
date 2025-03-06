FROM openjdk:21-jdk-slim

WORKDIR /attendance-app

COPY ./target/eAttendanceApi-0.0.1.jar /attendance-app/attendance-api.jar

EXPOSE 3032

ENTRYPOINT [ "java","-jar","/attendance-app/attendance-api.jar" ]