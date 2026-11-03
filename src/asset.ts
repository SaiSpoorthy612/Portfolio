// Resolves a file in public/ against the deploy base path (e.g. /Portfolio/)
export const asset = (path: string) => `${import.meta.env.BASE_URL}${path}`
export const image = (file: string) => asset(`images/${file}`)
