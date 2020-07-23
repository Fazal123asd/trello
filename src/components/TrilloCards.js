import React from 'react'

import { Card, CardContent, Typography } from '@material-ui/core'

export default ({text}) => {
    const styles = {
        root: {
            marginBottom: 8
        }
    }
    return (
        <Card style={styles.root}>
            <CardContent>

                <Typography color="textSecondary" gutterBottom>
                   {text}
        </Typography>
            </CardContent>
        </Card>
    )
}