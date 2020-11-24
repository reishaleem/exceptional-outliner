import pageService from "../../services/page.service";

export function getAllUserPagesResolver(args: any) {
    return pageService.getAllUserPages(args.ownerId);
}
