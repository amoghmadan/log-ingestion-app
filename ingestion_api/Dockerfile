FROM node:22-bullseye-slim

ARG USERNAME=logingestion

RUN groupadd -r $USERNAME
RUN useradd -r -g $USERNAME -m -d /home/$USERNAME $USERNAME

RUN chown -R $USERNAME:$USERNAME /home/$USERNAME
USER $USERNAME
WORKDIR /home/$USERNAME/app
COPY --chown=$USERNAME:$USERNAME . .

RUN npm install
RUN npm run build
