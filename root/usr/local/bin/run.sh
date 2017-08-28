#!/bin/sh
set -e
set -x

# Check if env variable is set
if [ "${MYURL}" == "" ]; then
  echo "Please set the enviroment variable MYURL"
  exit 1
fi

mkdir -p /home/byteball/.config
ln -s /data /home/byteball/.config/byteball-hub

# Copy config if it does not exist.
if [ ! -f /data/conf.js ]; then
  cp /var/lib/byteball/conf.js /data/conf.js
fi

# Reset file permissions
chown -R byteball:byteball /data

rm /opt/byteball-hub/conf.js
ln -s /data/conf.js /opt/byteball-hub/

# Switch work directory and execute
exec su -c "cd /opt/byteball-hub && node ./start.js" byteball
