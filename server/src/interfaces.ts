export type ComplaintType = "speed" | "politeness" | "precision" | "tech" | "accessability" | "pricing"

export interface Complaint {
    "time": string
    "user": number
    "type": ComplaintType
    "institutionId": number
    "rating": number
    "officeId": number
    "serviceType": string
    "clerk": string
    "comment": string
    "media": any[]
  }