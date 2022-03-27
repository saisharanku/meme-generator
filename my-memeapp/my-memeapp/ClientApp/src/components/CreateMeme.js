import React, { Component, useState } from 'react';
import './CreateMemeStyle.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Input} from 'reactstrap'

export class CreateMeme extends Component {

    constructor(props) {
        super(props);
        this.state={topLeft:"",
        topRight:"",
        bottomLeft:"",
        bottomRight:"",
        imageSrcFirst:"",
        imageFirst:[],
        filesarray:[]
    }
        this.canvasRef = React.createRef();
        this.imageRef = React.createRef(); 
    }

    componentDidMount(){
        const canvas = this.canvasRef.current;
        const context = canvas.getContext('2d');  
        context.fillStyle = "black";  
        context.fillRect(0, 0, 600, 400);
    }

    uploadimages(event){
        if (window.File && window.FileList && window.FileReader) {
    
              var files = event.target.files[0]; //FileList object   
               let {filesarray}=this.state
               filesarray.push(files)
               const canvas = this.canvasRef.current;
               const context = canvas.getContext('2d');  
                   if(this.state.filesarray.length==1) //loading first image in canvas
                   {
                   for(var i=0;i<this.state.filesarray.length+1;i++)              
                    var img = new Image();  
                     img.src = URL.createObjectURL(this.state.filesarray[0])
                    img.onload = () => {
                      context.drawImage(img, 50, 0,250,400);  //drawImage(image,x,y,width,height) here x starts at 50px right
                      context.fillStyle = "white";              
                      context.fillRect(50, 0, 250, 50);
                      context.fillRect(50,350,250,50)                 
                   };
                }
                   if(this.state.filesarray.length==2) //loading second image in canvas
                   {
                   var img2 = new Image();  
                     img2.src = URL.createObjectURL(this.state.filesarray[1])
                    img2.onload = () => {
                      context.drawImage(img2, 250,0,250,400);
                      context.fillStyle = "white";// we are creating white boxes after loading image
                      context.fillRect(250, 0, 250, 50); //fillRect(x,y,width,height) here image starts 250px from x i,e from left side
                      context.fillRect(250,350,250,100)
                   };
                }

              }

    }


    handleChange(event,field) {
        this.setState({
          [field]: event.target.value
        });   
        const canvas = this.canvasRef.current;
        const context = canvas.getContext('2d');   
        context.fillStyle = "black";
        context.font = "bold 20px Arial";
        if(this.state.topLeft!=undefined)
        context.fillText(this.state.topLeft, 50, 30,250,50)  //fillText(text,x,y,width,height) x distance from left,y distance from top
        if(this.state.topRight!=undefined)
        context.fillText(this.state.topRight,250,30,250,50)
        if(this.state.bottomLeft!=undefined)
        context.fillText(this.state.bottomLeft, 50, 380,250,0)
        if(this.state.bottomRight!=undefined)
        context.fillText(this.state.bottomRight,250,380,250,50)   
    }


    download(){
        const canvas = document.getElementById("canvas1")
       const image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
        var link = document.createElement('a');
       link.download = "my-image.png";
       link.href = image;
       link.click();
    }

    render() {
        return (
            <div className="float-container" onSubmit={this.handleSubmit}>
                <div className="float-child">
                <div className="col-sm">
                    <div className="col-sm">
                        <label>
                            Add text at top left image
                            </label>
                        <Input type="text" value={this.state.topLeft || ""} onChange={(event)=>this.handleChange(event,"topLeft")} ></Input>
                    </div>
                    <div className="col-sm">
                        <label>
                            Add text at top right image
                            </label>
                        <Input type="text" value={this.state.topRight || ""} onChange={(event)=>this.handleChange(event,"topRight")} ></Input>
                    </div>
                    <div className="col-sm" >
                        <label>
                            Add text at left bottom
                            </label>
                        <Input type="text" value={this.state.bottomLeft || ""} onChange={(event) =>this.handleChange(event,"bottomLeft")} ></Input>
                    </div>
                    <div className="col-sm" >
                        <label>
                            Add text at right bottom
                            </label>
                        <Input type="text" value={this.state.bottomRight || ""} onChange={(event) =>this.handleChange(event,"bottomRight")} ></Input>
                    </div>
                    <br/>
                    <div className='col-sm'>
                    <h5 className='messageStyle'>Note: please upload two images by clicking on "choose files" button after uploading 
                        two images only memes get displayed 
                        <br/> After images loaded completely then please add text in the textboxes above which shows text  on the meme then click on  "Download" button </h5>
                    </div>
                </div>
                </div>
                <div className="float-child">
                    <div className="container">
                    <div className="imageStyle">
                      <canvas id="canvas1" ref={this.canvasRef} width={600} height={400}  className="canvasStyle" /> 
                    <input type="file"  accept="image/*"  onChange={this.uploadimages.bind(this)} id="image-uploader1"  multiple />
                    </div>
                    <div className="imageStyle">
 
                    </div>
                    <br/>
                   
                    </div>
                    <br/> 
                    <div>
                    <button  className='btn btn-primary' onClick={this.download}>download</button>   
                    </div>         
                </div>

            </div>
        );
    }
}
