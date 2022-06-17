'use strict'

document.querySelectorAll('.show-hide').forEach( function( elem ) 
{
	elem.innerHTML = "Hide";
})

let showHide = ( elemID ) => {

	let elem = document.getElementById( elemID );

	if ( elem.classList.contains( 'hidden' ) )
	{
		event.target.innerHTML = "Hide";
		elem.classList.remove( 'hidden' );
		elem.classList.add( 'shown' );
	}
	else
	{
		event.target.innerHTML = "Show";
		elem.classList.remove( 'shown' );
		elem.classList.add( 'hidden' );
	}
}