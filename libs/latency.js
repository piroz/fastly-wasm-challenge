export async function withLatency(original, secconds = 0.3) {
    return await new Promise(resolve => {
        const timerId = setTimeout(() => {
            resolve(original)
            clearTimeout(timerId)
        }, secconds * 1000)
    });
}