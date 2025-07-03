export interface Team {
  id: string;
  name: string;
  teamsMember: TeamMember[];
}

export interface TeamMember {
  id: string;
  nickName: string;
}
