const sendEmailController = (req, res) => {


    try {
        return res.status(200).send({
            success: true,
            messege: "Your Message Send Successfully",

        });
    }
    catch (error) {
        console.log("error")
        return res.status(500).send({
            success: false,
            messege: "Send Email API Error",
            error
        })
    }
}

module.exports = { sendEmailController };