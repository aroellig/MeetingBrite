export const fetchEvents = () => (
    $.ajax({
        url: '/api/events'
    })
)

export const fetchEvent = eventId => {
   return $.ajax({
        url:`/api/events/${eventId}`
    })

}

export const createEvent = event => {
   return $.ajax({
        url: '/api/events',
        method: 'POST',
        data: event,
        processData: false, contentType: false,
    })
}
export const updateEvent = event => {
   return $.ajax({
        url: `/api/events/${event.id}`,
        method: 'PATCH',
        data:   event,
        processData: false, contentType: false
    })
}

export const removeEvent = eventId => (
    $.ajax({
        url: `/api/events/${eventId}`,
        method: 'DELETE'
    })
)

export const createReview = review => (
    $.ajax({
        url: '/api/reviews',
        method: 'POST',
        data: { review }
    })
)

export const removeReview = reviewId => (
    $.ajax({
        url: `/api/reviews/${reviewId}`,
        method: 'DELETE'
    })
)

export const updateReview = review => {
   return $.ajax({
        url: `/api/reviews/${review.id}`,
        method: 'PATCH',
        data:   review
    })
}

export const fetchReviews = eventId => (
    $.ajax({
        url: '/api/reviews',
        data: { eventId }
    })
)

export const fetchReview = reviewId => (
    $.ajax({
        url:`/api/reviews/${reviewId}`
    })
)