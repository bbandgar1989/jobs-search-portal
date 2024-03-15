export interface jobList {
    id: number,
    companyName: string,
    title: string,
    companyLogo: string
    reference: string
}
export interface jobDetails {
    id:number,
    companyName: string,
    title: string,
    companyLogo: string,
    reference: string,
    location: string,
    industries: [],
    types: [],
    description: string
    publishDate: string
  }