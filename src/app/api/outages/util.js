export const cleanOutage = (outage) => {
    return {
        uuid: outage.uuid,
        message: outage.message
    }
}
