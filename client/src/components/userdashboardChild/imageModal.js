
import React,{ Component } from 'react';
import './imageModal.css';
class ImageModal extends Component{
    componentDidMount(){
        var userContent = document.getElementById('userContent'); 
        userContent.style.zIndex= "14";
        var modal = document.getElementById('myModal');
        modal.style.display = "block";
        var modalImg = document.getElementById("img01");
        modalImg.src = this.props.image;
    }
    closeModal(){
        this.props.closeModal();
        var userContent = document.getElementById('userContent'); 
        userContent.style.zIndex= "0";
        var modal = document.getElementById('myModal');
        modal.style.display = "none";
        var modalImg = document.getElementById("img01");
    }
    render(){
        return(
            <div id="myModal" className="modal">
                <span onClick={this.closeModal.bind(this)} className="close1">&times;</span>
                <img className="modal-content" id="img01" />
                
            </div>
        );
    }

}

export default ImageModal;