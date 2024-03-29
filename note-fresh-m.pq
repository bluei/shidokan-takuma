let
    PageSize = 100,
    GetPage = (PageNumber as number) as table =>
        let
            Source = Json.Document(Web.Contents("http://your-api-url.com", [Query=[page=Text.From(PageNumber), pagesize=Text.From(PageSize)]])),
            data = try Source[data] otherwise null,
            toTable = if data <> null then Table.FromList(data, Splitter.SplitByNothing(), null, null, ExtraValues.Error) else null,
            expand = if toTable <> null then Table.ExpandRecordColumn(toTable, "Column1", {"Column1.1", "Column1.2"}, {"Column1.1", "Column1.2"}) else null
        in
            expand,
    CombinePages = List.Generate(() => [PageNumber = 1, Data = GetPage(1)], each [Data] <> null, each [PageNumber = [PageNumber] + 1, Data = GetPage([PageNumber])], each [Data]),
    FinalTable = Table.Combine(CombinePages)
in
    FinalTable