import React from 'react'
import styles from '../Css/SignIn.module.css'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Typography } from '@mui/material';
import ButtonGroup from '@mui/material/ButtonGroup';

const SignIn = () => {
  return (
    <div>
        <div className={styles.signin_component}>
            <div className={styles.main_container}>

                <div className={styles.compLogo}>
                    <img 
                    className={styles.imgComLogo}
                    src="https://s3-alpha-sig.figma.com/img/80a7/a87f/e15dc17e83a14ee719b331595122cd22?Expires=1674432000&Signature=SM4OO1R20OS~XzjH7p5o3lQSXBEoGz6UUrItT-bhJcNHjOgV6yB109DSOSIjXgVFrzoPI36G6dhXDnZwXgdPTMAtFOs9o-RG4nlwMfFOKQu6vloP6FeXrjELtgP0S-5mX5576QGY0SF9w6gMtXFBvR~Qd0qVzD9Yie0~FfbQdBAooehSVNpkQViJLvOhXhEBWLrbhCnzuRjVzKf1uI51K2bRBJxBpwe4EzVG9Pn3EbWl09bp2xht5kHDgDwApgAYKJ9e4qhAhz3Rp~pQKYA5Ra~PRDQtzH4ONI4CPmMjmUbtHWZ~xC2c9WqhTi77uCMk7~GSd3W0fuisfEWcugOG7g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
                </div>

                <div className={styles.defineComany}>
                    <Typography className={styles.defineComanyOne} variant="h3"> It’s a delight to have you onboard</Typography>
                    <Typography className={styles.defineComanyTwo} variant="h6"> Help us know you better.</Typography>
                    <Typography className={styles.defineComanyThree} variant="h6"> (This is how we optimize Wobot as per your business needs)</Typography>
                </div>

                <div className={styles.compFields}>
                    <TextField
                    className={styles.textfield}
                    required
                    id="outlined-required"
                    label="Company Name"
                    defaultValue=""
                    />

                    <TextField
                    className={styles.textfield}
                    id="outlined-select-currency"
                    select
                    label="Industry"
                    defaultValue=""
                    helperText="Please select your Industry"
                    />
                </div>

                <div className="styles.CompSize">
                    <Typography className="styles.CompSizeHeading" variant="p">Company Size</Typography>

                    <br />

                    <ButtonGroup className="styles.CompButtongrp" variant="outlined" aria-label="outlined primary button group">
                        <Button className="styles.CompButtongrpnew">1-20</Button>
                        <Button className="styles.CompButtongrpnew">21-50</Button>
                        <Button className="styles.CompButtongrpnew">50-200</Button>
                        <Button className="styles.CompButtongrpnew">201-500</Button>
                        <Button className="styles.CompButtongrpnew">500+</Button>
                    </ButtonGroup>
                </div>

                <Button className={styles.getStarted} variant="contained">Get Started</Button>

                
            </div>

        </div>
    </div>
  )
}

export default SignIn