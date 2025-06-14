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

// ログアウト
router.get('/logout', (req, res, next) => {
    req.logout(err => {
        if (err) return next(err);

        // セッション破棄とクッキー削除を追加！！
        req.session.destroy(() => {
            res.clearCookie('connect.sid'); // ← Cookieを明示的に削除
            res.redirect('/');
        });
    });
});
module.exports = router;
