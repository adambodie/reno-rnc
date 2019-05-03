<template>
<div>
	<div id='title'>
		<my-title message="Part 3: I Made It To Reno!"></my-title>
	</div>
<div class='container'>
	<my-slick :photos="photos"></my-slick>
	<div>
		<div class="story">
			<h1 class="story-heading">My Story</h1>
			<p>I finally reached Reno at around 6:00 pm, exhausted from the drive.  I got to the hotel and checked in, telling the hotel clerk on any room preference 'The higher the better.'  With that said, I headed up to my hotel room at the Sky Tower, Room 1676.  The room was big with a king sized bed, TV, bathroom and a great view dominated by the Circus Circus North Tower and surrounding area.  Suffice to say, I got great views at all times of the day; midday, sunrise, sunset, etc.  Lovely views at all times of the day.  I was impressed, especially for the 3-night $140 dollars I paid (which included tax, but who cares, still a good deal in my eyes), much better than $175 per night that the sign on the door had.</p>
			<p>After I checked in my room and checking up with my Mom, I was ready to eat.  I didn't want to drive anymore, so I stayed at the Circus Circus and one of its five dinner options.  The American and Mexican places were busy, so I went to the Sushi place for all-you-can-eat sushi.  Good, but I wasn't that hungry so I didn't get my moneys worth.  Oh well, I didn't care.  After I was done with dinner, I wanted to walk a little and see some nearby sights, but more on that later...</p>
			<p>I turned on the TV after I decided to crash for the night, and it brought up a message with my name on it.  After agreeing to the acknowledgment, the main screen, which also had my name, looked like a video game UI, with options to choose from.  I only needed the TV, so I watched TV.  The bathroom was also nice and spacious, but the light was above the mirror and made the shower dark when I was in there.  That was my biggest issue if I had one.  Otherwise, I thought it was a nice hotel room.  Non-smoking floor, also a plus, and I was just a couple doors down from the Ice Machine, which was nice.  There was a little screaming from the other rooms at night, mainly the last night, but I've dealt with worse...</p>
		</div>
		<div class="story">
			<h1 class="story-heading">My Facts</h1>
			<p>Circus Circus Reno opened on July 1, 1978, holding the second largest amount of rooms of Reno's downtown hotels (third overall).</p>
			<p>There are 1620 rooms overall at Circus Circus.</p>
			<p>There are three towers, the North Tower, the Casino Tower and the Sky Tower.</p>
			<p>There are 27 floors overall at the Sky Tower, the tallest of the Circus Circus towers.</p>
			<my-video title="ramada-video"></my-video>
		</div>
	</div>
</div>
</div>
</template>

<script>

export default {
  name: 'HotelRoom',
  data () {
    return {
      photos: [
    { title: 'Adam made it!', name: 'adam-circus-entrance' },
    { title: 'Enter my Hotel Room', name: 'entrance' },
    { title: 'Key to my Room', name: 'key' },
    { title: 'Bedroom', name: 'bedroom1' },
    { title: 'Bedroom', name: 'bedroom2' },
    { title: 'Bedroom', name: 'bedroom3' },
    { title: 'Welcome TV', name: 'tv1' },
    { title: 'Main Screen TV', name: 'tv2' },
    { title: 'View from Hotel Room', name: 'hotel-room-view1' },
    { title: 'View from Hotel Room', name: 'hotel-room-view2' },
    { title: 'View from Hotel Room', name: 'hotel-room-view3' },
    { title: 'View from Hotel Room', name: 'hotel-room-view4' },
    { title: 'View from Hotel Room', name: 'hotel-room-view5' },
    { title: 'View from Hotel Room', name: 'hotel-room-view6' },
    { title: 'View from Hotel Room', name: 'hotel-room-view7' },
    { title: 'View from Hotel Room', name: 'hotel-room-view8' },
    { title: 'View from Hotel Room', name: 'hotel-room-view9' },
    { title: 'Ramada', name: 'ramada' },
    { title: 'View from Hotel Room', name: 'hotel-room-view10' },
    { title: 'Adam enjoying a nice cup of Coffee', name: 'adam-hotel-room1' },
    { title: 'View from Hotel Room', name: 'hotel-room-view11' },
    { title: 'Silver Legacy Bowl', name: 'bowl' },
    { title: 'Grand Sierra Resort', name: 'GSR' },
    { title: 'Watching Jeopardy', name: 'jeopardy' },
    { title: 'View from Hotel Room', name: 'hotel-room-view12' },
    { title: 'Adam says hi', name: 'adam-hotel-room2' },
    { title: 'View from Hotel Room', name: 'hotel-room-view13' },
    { title: 'View from Hotel Room', name: 'hotel-room-view14' },
    { title: 'View from Hotel Room', name: 'hotel-room-view15' },
    { title: 'View from Hotel Room', name: 'hotel-room-view16' },
    { title: 'Look through the Window', name: 'window1' },
    { title: 'View from Hotel Room', name: 'hotel-room-view17' },
    { title: 'View from Hotel Room', name: 'hotel-room-view18' },
    { title: 'Look through the Window', name: 'window2' },
    { title: 'View from Hotel Room', name: 'hotel-room-view19' },
    { title: 'View from Hotel Room', name: 'hotel-room-view20' },
    { title: 'View from Hotel Room', name: 'hotel-room-view21' }
      ]
    }
  }
}
</script>
