<?php include 'include/head.php'; ?>
<?php include 'include/header.php'; ?>

<style>
    /* thankyou */
    /* thankyou */
    .thank-you-section {
        min-height: 70vh;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        background: linear-gradient(135deg, #6a4aa1, #8e6ccf);
        color: #fff;
        padding: 60px 20px;
    }

    .thank-you-section h1 {
        font-size: 48px;
        font-weight: 700;
        margin-bottom: 15px;
    }

    .thank-you-section p {
        font-size: 18px;
        max-width: 600px;
        margin: 0 auto 30px;
        line-height: 1.6;
        opacity: 0.95;
    }

    .btn-primary {
        display: inline-block;
        padding: 12px 30px;
        background: #0b1c2d;
        color: #fff;
        border-radius: 6px;
        text-decoration: none;
        transition: 0.3s ease;
    }

    .btn-primary:hover {
        background: #000;
    }

    /* 📱 Mobile Responsive */
    @media (max-width: 768px) {
        .thank-you-section {
            min-height: auto;
            padding: 40px 15px;
        }

        .thank-you-section h1 {
            font-size: 32px;
        }

        .thank-you-section p {
            font-size: 16px;
            margin-bottom: 20px;
        }

        .btn-primary {
            padding: 10px 24px;
            font-size: 15px;
        }
    }

    /* 📱 Small phones */
    @media (max-width: 480px) {
        .thank-you-section h1 {
            font-size: 26px;
            margin-top: 87px;
        }

        .thank-you-section p {
            font-size: 15px;
        }
    }
</style>

<section class="thank-you-section">
    <div class="container">
        <h1>Thank You!</h1>
        <p>
            Thank you for reaching out to Designatrix.
            One of our team members will contact you soon.
        </p>
        <a href="index.php" class="btn-primary">Back to Home</a>
    </div>
</section>

<?php include 'include/footer.php'; ?>
<?php include 'include/script.php'; ?>