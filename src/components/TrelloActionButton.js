import React from 'react'
import {Icon, Card, Button} from '@material-ui/core'

import TextareaAutosize from 'react-textarea-autosize';

const styles = {
    openFormButtonGroup: {
        display: 'flex',
        alignItems: 'center',
        cursor: 'pointer',
        borderRadius: 3,
        height: 36,
        width: 272,
        paddingLeft: 10 
    },
    formButtonGroup: {
        marginTop: 8,
        display: 'flex',
        alignItems: 'center'
    }
}

export default class extends React.Component{
    state={
        formOpen: false,
        text: ""
    }

  openForm = () =>{
      this.setState({formOpen: true})
  }

  closeForm = () =>{
    this.setState({formOpen: false})
}

handleInputChange=(e) =>{
    this.setState({
        text: e.target.value
    })
}


    renderAddButton = () => {
      
        const {lists} = this.props
        const buttonText = lists ? 'Add another list' : 'Add another card';
        const buttonTextOpacity = lists? 1 : 0.5;
        const buttonTextColor = lists ? "white": 'inherit';
        const buttonTextBackground = lists ? "rgba(0,0,0,.15)" : "inherit"
        return(
            <div onClick={this.openForm} style={{...styles.openFormButtonGroup, opacity: buttonTextOpacity,
            color: buttonTextColor,
            backgroundColor: buttonTextBackground
            }}>
                <Icon>add</Icon>
        <p>{buttonText}</p>
            </div>
        )
    }

   renderForm = () =>{
        const {lists} = this.props;
        const placeholder = lists ? 'Enter the list title...' : 'Enter a title for this card...'
        const buttonTitle = lists ? 'Add List' : 'Add Card'

       return <div>
           <Card style={{
               minHeight: 80,
               minWidth: 272,
               padding: '6px 8px 2px'
               
           }}>
            <TextareaAutosize
            placeholder = {placeholder}
            autoFocus
            onBlur={this.closeForm}
            value = {this.state.text}
            onChange= {(e)=>this.handleInputChange(e)}
            style={{
                resize: 'none',
                width: '100%',
                outline: 'none',
                border: 'none',
                overflow: 'hidden'
            }}
            />
           </Card>

           <div style={styles.formButtonGroup}>
               <Button variant='contained' style={{color: 'white',
                backgroundColor: 'Green'}}
                
                >{buttonTitle}</Button>

                <Icon style={{marginLeft: 8, cursor: 'pointer'}}>close</Icon>
           </div>
       </div>
   }

    render(){
       return this.state.formOpen? this.renderForm() : this.renderAddButton();
    }

   
}