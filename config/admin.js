module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '67ad52360712d52bdbc442461dade530'),
  },
});
