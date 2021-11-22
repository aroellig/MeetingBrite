export const fetchEvents = () => (
    $.ajax({
        url: '/api/events'
    })
)

export const fetchEvent = eventId => (
    $.ajax({
        url:`/api/events/${eventId}`
    })
)

export const createEvent = event => (
    $.ajax({
        url: '/api/events',
        method: 'POST',
        data: { event }
    })
)
export const updateEvent = event => (
    $.ajax({
        url: `/api/events/${event.id}`,
        method: 'PATCH',
        data: { event }
    })
)

export const removeEvent = eventId => (
    $.ajax({
        url: `/api/events/${eventId}`,
        method: 'DELETE'
    })
)