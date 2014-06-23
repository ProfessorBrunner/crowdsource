//var FITS = astro.FITS;
//// Define a callback function for when the FITS file is received
//var callback = function() {
//    // Get the first header-dataunit containing a dataunit
//    var hdu = this.getHDU();
//    var header = hdu.header;
//    var bitpix = header.get('BITPIX');
//    var dataunit = hdu.data;
//}
//
//// Set path to FITS file
//var url = "/images/fitsImage/1.fits";
//// Initialize a new FITS File object
//var fits = new FITS(url, callback);

var fits = new FITS();
fits.stretch = "log";

// Bind some events
fits.bind("click",function(e){
    e.y = this.height - e.y
    var value =this.image[e.y*this.width+e.x];
    document.getElementById('status').innerHTML ='click=('+ e.x+','+e.y+')='+value;
}).bind("mousemove",function(e){
        e.y = this.height - e.y
        var value =this.image[e.y*this.width+e.x];
        document.getElementById('status').innerHTML ='move=('+ e.x+','+e.y+')='+value;
    }).bind("load",function(){
        document.getElementById('bitpix').innerHTML = this.header.BITPIX;
        document.getElementById('depth').innerHTML = this.depth;
        document.getElementById('z').value = 0;
        this.draw("FITSimage");
    })


fits.load("images/fitsImage/1.fits");