import { IListScheduleService } from "@modules/Schedule/services/makeListScheduleService.factory";

export class MakeListScheduleController {
  constructor(private readonly listScheduleService: IListScheduleService) {}

  async execute(request: any, response: any) {
    const { professionalId } = request.body;
    const schedules = await this.listScheduleService(professionalId);
    return response.json(schedules);
  }
}
