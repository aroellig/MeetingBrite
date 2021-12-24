export const fetchRsvps = () => (
    $.ajax({
        url:'/api/rsvps'
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