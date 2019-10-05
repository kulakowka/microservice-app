module.exports = {
  apps: [
    {
      name: "API",
      script: "apps/api",
      instances: 2,
      autorestart: true,
      watch: true,
      max_memory_restart: "1G",
      env: {
        NODE_ENV: "development"
      },
      env_production: {
        NODE_ENV: "production"
      }
    },

    {
      name: "USER",
      script: "apps/user",
      instances: 2,
      autorestart: true,
      watch: true,
      max_memory_restart: "1G",
      env: {
        NODE_ENV: "development"
      },
      env_production: {
        NODE_ENV: "production"
      }
    },

    {
      name: "ARTICLE",
      script: "apps/article",
      instances: 2,
      autorestart: true,
      watch: true,
      max_memory_restart: "1G",
      env: {
        NODE_ENV: "development"
      },
      env_production: {
        NODE_ENV: "production"
      }
    },

    {
      name: "VIDEO",
      script: "apps/video",
      instances: 1, // Важно запускать эту штуку в единственном экземпляре
      autorestart: true,
      watch: true,
      max_memory_restart: "1G",
      env: {
        NODE_ENV: "development"
      },
      env_production: {
        NODE_ENV: "production"
      }
    }
  ],

  deploy: {
    production: {
      user: "node",
      host: "212.83.163.1",
      ref: "origin/master",
      repo: "git@github.com:repo.git",
      path: "/var/www/production",
      "post-deploy": "npm install && pm2 reload ecosystem.config.js --env production"
    }
  }
};
