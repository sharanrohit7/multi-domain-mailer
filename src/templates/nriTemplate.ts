export const nriTemplate = ()=>{
    return `<!DOCTYPE html>
    <html>
    <head>
        <style>
            body {
                font-family: Arial, sans-serif;
                color: #333333;
                background-color: #f4f4f4;
                margin: 0;
                padding: 0;
            }
            .container {
                width: 100%;
                max-width: 600px;
                margin: 0 auto;
                background-color: #ffffff;
                padding: 20px;
                box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            }
            .header {
                background-color: #2E86C1;
                color: #ffffff;
                padding: 20px;
                text-align: center;
            }
            .header h1 {
                margin: 0;
                font-size: 24px;
            }
            .content {
                padding: 20px;
            }
            .content h2 {
                color: #2E86C1;
                font-size: 20px;
            }
            .content p {
                font-size: 16px;
                line-height: 1.5;
            }
            .service-list {
                list-style: none;
                padding: 0;
            }
            .service-list li {
                background-color: #e9ecef;
                margin: 10px 0;
                padding: 10px;
                border-radius: 5px;
            }
            .service-list li span {
                font-weight: bold;
            }
            .button-container {
                text-align: center;
                margin-top: 20px;
            }
            .button-container a {
                background-color: #28A745;
                color: #ffffff;
                padding: 15px 25px;
                text-align: center;
                text-decoration: none;
                border-radius: 5px;
                display: inline-block;
                font-size: 16px;
            }
            .footer {
                text-align: center;
                padding: 10px;
                font-size: 12px;
                color: #777777;
            }
            .footer a {
                color: #2E86C1;
                text-decoration: none;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="header">
                <h1>Unlock Your Business Potential with Enaidel's Expert Services!</h1>
            </div>
            <div class="content">
                <h2>Exclusive Services:</h2>
                <p>Discover how our wide range of services can transform your business. Our expert team is here to provide you with innovative solutions tailored to your needs.</p>
                <ul class="service-list">
                    <li><span>Graphic Design:</span> Elevate your brand with creative and eye-catching designs.</li>
                    <li><span>Website Development:</span> Build dynamic and responsive websites tailored to your business.</li>
                    <li><span>UI/UX Design:</span> Enhance user experience with our expert design services.</li>
                    <li><span>Mobile App Development:</span> Get customized mobile apps to meet your business needs.</li>
                    <li><span>Database Management:</span> Ensure secure and efficient data management solutions.</li>
                    <li><span>Digital Marketing:</span> Boost your online presence with targeted marketing strategies.</li>
                </ul>
                <div class="button-container">
                    <a href="http://enaidel.co.in">Explore Our Services</a>
                </div>
            </div>
            <div class="footer">
                <p>You received this email because you are subscribed to Enaidel's updates. <a href="#">Unsubscribe</a></p>
            </div>
        </div>
    </body>
    </html>
    `
}