const beforeLines = [
  { n: 1, code: "function UserDashboard(props: any) {", type: "plain" },
  { n: 2, code: "  const [data, setData] = useState<any>(null);", type: "plain" },
  { n: 3, code: "  useEffect(() => {", type: "keyword" },
  { n: 4, code: "    fetch(`/api/${props.id}`)", type: "plain" },
  { n: 5, code: "      .then(r => r.json())", type: "plain" },
  { n: 6, code: "      .then(setData);", type: "plain" },
  { n: 7, code: "  }, [props.id]);", type: "plain" },
  { n: 8, code: "  return <div>{data?.name}</div>;", type: "plain" },
  { n: 9, code: "}", type: "plain" },
];

const afterLines = [
  { n: 1, code: "export function UserProfile({ id }: Props) {", type: "keyword" },
  { n: 2, code: "  const { profile, isLoading } = useUserProfile(id);", type: "plain" },
  { n: 3, code: "  if (isLoading) return <ProfileSkeleton />;", type: "keyword" },
  { n: 4, code: "  return <ProfileHeader name={profile.name} />;", type: "plain" },
  { n: 5, code: "}", type: "plain" },
];

const Line = ({ n, code, type, removed }: { n: number; code: string; type: string; removed?: boolean }) => (
  <div className={`flex ${removed ? "bg-ld-error/8" : "bg-ld-success/8"}`}>
    <span className="w-8 shrink-0 select-none px-2 py-0.5 text-right text-[10px] text-ld-muted">{n}</span>
    <code className={`flex-1 px-2 py-0.5 font-mono text-[10px] leading-snug tok-${type}`}>{code}</code>
  </div>
);

interface DiffMockProps {
  activePanel?: number;
}

const DiffMock = ({ activePanel = 0 }: DiffMockProps) => {
  return (
    <div className="grid min-h-[300px] grid-cols-2 bg-ld-surface">
      <div
        className={`border-r transition-colors ${
          activePanel === 0 ? "border-ld-primary/40 bg-ld-error/5" : "border-ld-border"
        }`}
      >
        <div className="flex items-center justify-between border-b border-ld-border px-3 py-2">
          <span className="text-caption text-ld-error">Before</span>
          <span className="mock-pill">−12 lines</span>
        </div>
        <div className="overflow-hidden">
          {beforeLines.map((l) => (
            <Line key={l.n} {...l} removed />
          ))}
        </div>
      </div>
      <div className={activePanel === 1 ? "bg-ld-success/5 ring-1 ring-inset ring-ld-primary/40" : ""}>
        <div className="flex items-center justify-between border-b border-ld-border px-3 py-2">
          <span className="text-caption text-ld-success">After</span>
          <span className="mock-pill mock-pill--active">+4 lines</span>
        </div>
        <div className="overflow-hidden">
          {afterLines.map((l) => (
            <Line key={l.n} {...l} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DiffMock;
