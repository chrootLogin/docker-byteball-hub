FROM node:7-alpine
MAINTAINER Simon Erhardt <me+docker@rootlogin.ch>

ARG UID=1555
ARG GID=1555

COPY root /

RUN set -ex \

  # Install packages
  && apk add --update --no-cache \
  git \
  tini \

  # Add user
  && addgroup -g ${GID} byteball \
  && adduser -u ${UID} -h /opt/byteball -H -G byteball -s /sbin/nologin -D byteball \
  && mkdir -p /opt/byteball \
  && chown byteball:byteball /opt/byteball \

  # Install byteball
  && git clone --depth 1 https://github.com/byteball/byteball-hub.git /opt/byteball-hub \
  && cd /opt/byteball-hub \
  && npm install \

  # Post-installation steps
  && chmod +x /usr/local/bin/run.sh

ENTRYPOINT ["/sbin/tini", "--"]
CMD ["/usr/local/bin/run.sh"]
