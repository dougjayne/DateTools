
console.log("Start");
$(function() {
    //var the fields
    var $firstDate = $('#firstDate');
    var $secondDate = $('#secondDate');
    var $daysBetween = $('#daysBetween');
    var $inputs = $('input');
    console.log(`firstDate is ${ $firstDate.val() } and secondDate is ${ $secondDate.val() }`);
    

    //setup function to calculate dates
    //if both fields are not empty, then calc time between dates
    function compareDates (){
        //var the moment vars (watch for undefined)
        var mFirstDate = moment( $firstDate.val(), "MM-DD-YYYY" );
        var mSecondDate = moment( $secondDate.val(), "MM-DD-YYYY" );
        console.log(`first Moment is ${ mFirstDate.format() } and second Moment is ${ mSecondDate.format() }`);
        
        var mDiff = mFirstDate.diff(mSecondDate, 'days');
        mDiff = Math.abs(parseInt(mDiff, 10));
        console.log(`Time between the dates is ${mDiff} days`);
        $daysBetween.text(`Time Between = ${mDiff} Days`);
    }

    //event handlers
    $inputs.change(function () {
        console.log('Input Has Changed');
        compareDates();
    });

    compareDates();
});