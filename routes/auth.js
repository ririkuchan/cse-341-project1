const express = require('express');
const passport = require('passport');

const router = express.Router();

// Google 認証開始
router.get('/google',
    passport.authenticate('google', { scope: ['profile', 'email'] })
);

// Google 認証コールバック
router.get('/google/callback',
    passport.authenticate('google', { failureRedirect: '/' }),
    (req, res) => {
        res.redirect('/protected');
    }
);

// プロテクトされたルート
router.get('/protected', (req, res) => {
    if (req.isAuthenticated()) {
        res.send(`Hello, ${req.user.displayName}! This is a protected route.`);
    } else {
        res.redirect('/auth/google');
    }
});

// ログアウト
router.get('/logout', (req, res, next) => {
    req.logout(err => {
        if (err) return next(err);
        req.session.destroy(() => {
            res.clearCookie('connect.sid'); // ← Cookieも明示的に消す！
            res.redirect('/');
        });
    });
});
module.exports = router;
