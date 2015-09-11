function write(){
    this.gloabvalue = 'www'
    console.log(this);
    function inner() {
        this.globalvalue = 'i am a globalvalue';
      //console.log('this is:',this);
    }
    inner();
}
write();
//exports.write = write;