export type ComplaintType = "speed" | "politeness" | "precision" | "tech" | "accessability" | "pricing"

export interface Complaint {
    "time": string
    "user": number
    "complaints": {
      [key in ComplaintType] : number
    } 
    "institutionId": number
    "officeId": number
    "serviceType": string
    "clerk": string
    "comment": string
    "media": any[]
  }