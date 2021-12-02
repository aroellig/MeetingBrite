export const fetchRsvps = (userId) => (
    $.ajax({
        url:'/api/rsvps',
        data: { userId }
    })
)

export const fetchRsvp = rsvpId => (
    $.ajax({
        url:`/api/rsvps/${rsvpId}`
    })
)

export const createRsvp = rsvp => (
    $.ajax({
        url:'/api/rsvps',
        method: 'POST',
        data: { rsvp }
    })
)

export const deleteRSVP = rsvpId => (
    $.ajax({
        url:`/api/rsvps/${rsvpId}`,
        method: 'DELETE'
    })
)